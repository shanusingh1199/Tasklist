import {Client,ID,Databases,Storage} from "appwrite"
import conf from "../conf/conf.js";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async createTask({entityName,slug,date,meeting,phone,contact,note,status,avatar}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    entityName,date,meeting,phone,contact,note,status,avatar
                }
            )
        } catch (error) {
            throw new Error(`Error creating task: ${error.message}`);
        }
    }

    async updateTask({entityName,slug,date,meeting,phone,contact,note,status,avatar}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    entityName,date,meeting,phone,contact,note,status,avatar
                }
            )
        } catch (error) {
            throw new Error(`Error updating task: ${error.message}`);
        }
    }

    async deleteTask(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.error(`Error deleting task: ${error.message}`);

            return false
        }
    }

    async getTask(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.error(`Error fetching tasks: ${error.message}`);
            return false;
        }
    }

    async getTasks(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                []
            )
        } catch (error) {
            console.log("documents can,t be fetched")
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error(`File not uploaded: ${error.message}`);
            return false;

        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID,
            )
            return true;
        } catch (error) {
            console.error(`File not deleted: ${error.message}`);
            return false;
            
        }
    }


     async getFilePreview(fileID){
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileID,
            )
        } catch (error) {
            console.error(`Error fetching file preview: ${error.message}`);
        }
     }
}

export const service =new Service()