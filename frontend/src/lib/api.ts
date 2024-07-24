import axios from "axios"

export const youtube_api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/playlists",
  params: {
    key: process.env.YOUTUBE_DATA_API,
  },
});