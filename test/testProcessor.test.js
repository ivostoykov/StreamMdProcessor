// Import the module
const StreamMarkdownProcessor = require('../stream_md_processor');

describe('StreamMarkdownProcessor functionality', () => {
  let recipient;

  // Setup before each test
  beforeEach(() => {
    // Reset the recipient object before each test to ensure test isolation
    recipient = {
      innerHTML: '',
      tagName: 'div',
      setAttribute: function(key, value) {
        this[key] = value;
      },
      removeAttribute: function(key) {
        delete this[key];
      },
      closest: function() { return this; }, // Simplified for testing
      querySelector: function() { return this; }, // Simplified for testing
      appendChild: function(element) { 
        this.innerHTML += element.outerHTML; 
      }
    };
  });

  // Define a test
  test('processes markdown data chunks correctly', () => {
    // Test data chunks (simulate incoming stream data)
    const testDataChunks = [
      "Here is some text with a `code` snippet.",
      "\nAnd here is a link: [OpenAI](https://openai.com)",
      "\n## Markdown Header\nContinuing with regular text."
    ];

    // Process each data chunk
    testDataChunks.forEach(chunk => {
      StreamMarkdownProcessor.processStreamChunk(chunk, recipient);
    });

    // Assertions
    // Here you might want to assert the state of `recipient.innerHTML` or other outcomes
    // Example:
    expect(recipient.innerHTML).toContain('OpenAI');
    expect(recipient.innerHTML).toContain('<code');
    expect(recipient.innerHTML).toContain('<h2');
    expect(recipient.innerHTML).toContain('<a href="https://openai.com">OpenAI</a>');
    
    // Cleanup if necessary
    StreamMarkdownProcessor.dispose();
  });
});

