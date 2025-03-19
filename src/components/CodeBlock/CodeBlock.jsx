import React, {useState} from 'react';
import "./CodeBlock.scss";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };
  return (
    <div className="code-block">
        <div className="code-block-header">
          <span>Sh</span>
          <button onClick={handleCopy} className="copy-code"><img src="/img/icon-copy.svg" alt="" />{copySuccess ? 'Copied!' : 'Copy Code'}</button>
        </div>
        <SyntaxHighlighter language={language} style={coy} showLineNumbers>
        {code}
        </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;