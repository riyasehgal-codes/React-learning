import conf from '../conf/conf.js'
import { Client, Account, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client(); 
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.APPWRITE_URL)
            .setProject(conf.APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug, // Use slug as the document ID
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}) {
        try {
            return await this.databases.updateDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                queries,
            )
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.APPWRITE_BUCKET_ID,
                fileId
            )
        } catch (error) {
            console.error('Error deleting file:', error);
            throw error;
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.bucket.getFilePreview(
                conf.APPWRITE_BUCKET_ID,
                fileId
            )
        } catch (error) {
            console.error('Error fetching file preview:', error);
            throw error;
        }
    }

}

const service = new Service()

export default service