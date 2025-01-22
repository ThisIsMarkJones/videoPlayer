# VideoPlayer LWC

## Overview
The **VideoPlayer** Lightning Web Component (LWC) is designed for Salesforce Lightning Record Pages. It dynamically retrieves a YouTube video URL from a specified field on the record and displays it in an embeddable player. This component supports:

- Standard and custom objects.
- Both Text and URL field types.
- Customizable title displayed above the video.

The component is responsive and styled for seamless integration with Salesforce Lightning Experience.

---

## Features

- **Dynamic Field Resolution**: Automatically retrieves the video URL from the configured field.
- **YouTube Support**: Parses YouTube links for embedding in an iframe.
- **Customizable Title**: Admins can configure a title to display above the video.
- **Responsive Design**: Ensures the video layout adapts to various screen sizes.

---

## Installation

1. Clone or download this repository.
2. Deploy the component files (`.js`, `.html`, `.css`, `.xml`) to your Salesforce org using your preferred method (e.g., Salesforce CLI, Workbench, or IDE).
3. Add the component to a Lightning Record Page.

---

## Configuration

### Properties in Lightning App Builder

1. **Field API Name**:
   - Provide the API name of the field containing the video URL.
   - Use the full API name format:
     - For standard objects: `StandardObject.Video_URL__c`
     - For custom objects: `CustomObject__c.Video_URL__c`
   - The field can be of type **Text** or **URL**.

2. **Title**:
   - Enter the text to display above the video player.
   - Example: `Welcome to the Demo Video!`

### Adding to a Lightning Record Page

1. Open the desired object’s Lightning Record Page in the Lightning App Builder.
2. Drag and drop the **VideoPlayer** component onto the page.
3. Configure the following properties:
   - **Field API Name**: Specify the field containing the YouTube URL.
   - **Title**: Add a title to display above the video.
4. Save and activate the page.

---

## Usage Notes

1. The component supports **YouTube URLs** in the following formats:
   - `https://www.youtube.com/watch?v=VIDEO_ID`
   - `https://youtu.be/VIDEO_ID`
2. Ensure the field specified in the `Field API Name` contains a valid YouTube URL.
3. If the field is empty or the URL is invalid, the component displays an error message: `No video available. Ensure the field contains a valid video URL.`

---

## Styling

The component includes the following styles:

- **White Background**: Ensures clear visibility against Salesforce themes.
- **Padding and Shadow**: Provides a polished, card-like appearance.
- **Responsive Design**: Adapts to various screen sizes while maintaining proportions.

---

## Example Configurations 
| **Marker** | **Standard Object Configuration** | **Custom Object Configuration** |
| ---------- | --------------------------- | ------------------------- |
| **Object** | Contact | `CustomObject__c` |
| **Field** | `Video_URL__c` | `Test_Video_URL__c` |
| **`Field API Name`** | `Contact.Video_URL__c` | `CustomObject__c.Test_Video_URL__c |

---

## Troubleshooting

### Common Issues

1. **Field Not Found Error**:
   - Ensure the `Field API Name` is specified in the correct format: `ObjectAPIName.FieldAPIName`.

2. **No Video Displayed**:
   - Verify the field contains a valid YouTube URL.
   - Ensure the field type is either **Text** or **URL**.

3. **Error in Lightning App Builder**:
   - The component requires a `recordId`. Ensure it is added to a Lightning Record Page and not used in a context without a record.

---

## License
This component is open-source and available under the MIT License.
