# StreamMdProcessor
Attempt to handle stream marckdown

## Usage

Add wherever you need it:
```HTML
<script src="ypur_path/stream_md_processor.js"></script>
```

Call it:
```javascript
StreamMarkdownProcessor.processStreamChunk(chunk, recipient);
```
where 
- `chunk` is received bit of the stream
- `recipient` is either a DOM element which serves as a container, or a function that will return a DOM element.

if needed the raw stream content get it:
```javascript
StreamMarkdownProcessor.getRawContent();
```

At the end kindly free the resources:
```javascript
StreamMarkdownProcessor.dispose();
```

-----
Here is the result of this Readme file processed:

![Screenshot from 2024-04-10 12-36-10](https://github.com/ivostoykov/StreamMdProcessor/assets/889184/b3080595-62f1-4caf-a7a0-b0806904ad91)
