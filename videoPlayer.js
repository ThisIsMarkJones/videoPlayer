import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class VideoPlayer extends LightningElement {
    @api recordId; // Record Id from the record page
    @api fieldApiName; // Field API name containing the video URL
    @api title; // Title of the video player, now configurable

    videoUrl; // The resolved video URL
    embedUrl; // The embeddable video URL
    errorMessage; // Error message to display to users

    @wire(getRecord, { recordId: '$recordId', fields: '$resolvedField' })
    wiredRecord({ error, data }) {
        if (data) {
            try {
                const fieldName = this.fieldApiName.split('.')[1]; // Extract Field API Name
                const fieldValue = data.fields[fieldName]?.value; // Safely access the field value

                // Assign the video URL (supports both Text and URL fields)
                this.videoUrl = fieldValue ? fieldValue.toString() : null;
                this.processVideoUrl();

                this.errorMessage = null; // Clear previous errors
            } catch (e) {
                this.errorMessage = 'Error retrieving video URL: Invalid field API name.';
                console.error(e);
            }
        } else if (error) {
            this.videoUrl = null;
            this.errorMessage = 'Error retrieving record data.';
            console.error(error);
        }
    }

    get resolvedField() {
        return this.fieldApiName ? [this.fieldApiName] : [];
    }

    processVideoUrl() {
        if (this.videoUrl && (this.videoUrl.includes('youtube.com') || this.videoUrl.includes('youtu.be'))) {
            this.embedUrl = this.getYouTubeEmbedUrl(this.videoUrl);
        } else {
            this.embedUrl = null; // Handle invalid or non-YouTube URLs
        }
    }

    getYouTubeEmbedUrl(url) {
        try {
            const videoId = url.includes('youtu.be')
                ? url.split('youtu.be/')[1]
                : new URL(url).searchParams.get('v');
            return `https://www.youtube.com/embed/${videoId}`;
        } catch (e) {
            console.error('Invalid YouTube URL:', e);
            return null;
        }
    }
}
