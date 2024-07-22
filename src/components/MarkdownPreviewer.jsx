import React, { useState } from 'react';
import { marked } from 'marked';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2

[FreeCodeCamp](https://www.freecodecamp.org)

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item
- Another item

> Blockquote

![FreeCodeCamp Logo](https://www.freecodecamp.org/logo.png)

**Bold text**`);

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-previewer">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleEditorChange}
        rows="10"
        cols="50"
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
      />
    </div>
  );
};

export default MarkdownPreviewer;
