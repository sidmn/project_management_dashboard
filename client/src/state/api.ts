import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Project {
    id:number;
    name: string;
    description?: string;
    startDate?: string;
    endDate?: string;
}

export enum Priority{
    Urgernt ="Urgent",
    High = "High",
    Medium ="Medium",
    Low = "Low",
    Backlog = "BackLog"
}

export enum Status {
    ToDo = "To Do",
    WorkInProgress = "Work In Progress",
    UnderReview = "Under Review",
    Completed = "Completed"
}

export interface User{
    userId?: number;
    username: string;
    email: string;
    profilePictureUrl?: string;
    cognitoId?: string;
    teamId?: number;
}

export interface Attachment {
    ifd: number;
    fileUrl: string;
    fileName: string;
    taskId: number;
    uploadedById: number;

}

export interface Task {
    id:number;
    title: string;
    description?: string;
    status?: Status;
    priority?: Priority;
    tags?: string;
    startDate?: string;
    dueDate?: string;
    points?: number;
    projectId: number;
    authorUserId?: number;
    assignedUserId?: number;

    author?: UserActivation;
    assignee?:UserActivation;
    comments?: Comment[];
    attachments?: Attachment[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes: [],
    endpoints: (build) => ({
        getProject: build.query<Project[],
    }),
});

export const {} = api;