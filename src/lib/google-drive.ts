export interface DriveFile {
  id: string;
  name: string;
}

export async function fetchDriveFiles(folderId: string): Promise<DriveFile[]> {
  const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
  if (!apiKey) {
    console.error("[Google Drive] VITE_GOOGLE_DRIVE_API_KEY não está definida no .env — nenhuma imagem será carregada.");
    return [];
  }

  const q = encodeURIComponent(
    `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`
  );
  const fields = encodeURIComponent("files(id,name)");
  const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&key=${apiKey}&pageSize=100`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Drive API retornou ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as { files?: DriveFile[] };
  return sortByName(data.files ?? []);
}

function leadingNumber(name: string): number {
  const match = name.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : Infinity;
}

function sortByName(files: DriveFile[]): DriveFile[] {
  return [...files].sort((a, b) => {
    const na = leadingNumber(a.name);
    const nb = leadingNumber(b.name);
    if (na !== nb) return na - nb;
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });
  });
}
