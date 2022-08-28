import { Album } from "./types";

export const loadAlbum = async (id: string): Promise<Album> => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&entity=song`
    );

    if (!response.ok) {
      return Promise.reject(new Error(response.statusText));
    }

    const data = await response.json();

    if (data?.resultCount > 0) {
      return data;
    } else {
      return Promise.reject(new Error(`No results for album id "${id}"`));
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
