import { Albums } from "./types";

export const loadAlbums = async (): Promise<Albums> => {
  try {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );

    if (!response.ok) {
      return Promise.reject(new Error(response.statusText));
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
