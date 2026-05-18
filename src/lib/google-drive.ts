export interface DriveFile {
  id: string;
  name: string;
}

export async function fetchDriveFiles(folderId: string): Promise<DriveFile[]> {
  const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
  if (!apiKey) throw new Error("VITE_GOOGLE_DRIVE_API_KEY não configurada");

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
  return data.files ?? [];
}
