// To parse this data:
//
//   import { Convert, YoutubeResponse } from "./file";
//
//   const youtubeResponse = Convert.toYoutubeResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface YoutubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    regionCode:    string;
    pageInfo:      PageInfo;
    items:         Item[];
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      ID;
    snippet: Video;
}

export interface ID {
    kind:       IDKind;
    videoId?:   string;
    channelId?: ChannelID;
}

export enum ChannelID {
    UCIak6JLVOjqhStxrL1Lcytw = "UCIak6JLVOjqhStxrL1Lcytw",
    UCJN4CLZorb0EyIPTSS3A = "UCJN4c_lZorb_0eyIP_tSS3A",
    UCSLbbBoUqpin6BE34WhSOvA = "UCSLbbBoUqpin6BE34whSOvA",
}

export enum IDKind {
    YoutubeChannel = "youtube#channel",
    YoutubeVideo = "youtube#video",
}

export enum ItemKind {
    YoutubeSearchResult = "youtube#searchResult",
}

export interface Video {
    publishedAt:          Date;
    channelId:            ChannelID;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         ChannelTitle;
    liveBroadcastContent: LiveBroadcastContent;
    publishTime:          Date;
}

export enum ChannelTitle {
    GunsNRoses = "Guns N' Roses",
    GunsNRosesTopic = "Guns N' Roses - Topic",
    GunsNRosesVEVO = "GunsNRosesVEVO",
}

export enum LiveBroadcastContent {
    None = "none",
    Upcoming = "upcoming",
}

export interface Thumbnails {
    default: Default;
    medium:  Default;
    high:    Default;
}

export interface Default {
    url:     string;
    width?:  number;
    height?: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}

