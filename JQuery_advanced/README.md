# jQuery Advanced

A comprehensive project exploring advanced jQuery concepts including DOM manipulation, AJAX requests, pagination, and form handling.

## 📋 Project Overview

This project consists of multiple HTML files demonstrating progressive jQuery techniques, from basic library loading to complex AJAX interactions with a REST API.

## 🎯 Learning Objectives

- Load and verify jQuery in a webpage
- Create and manipulate DOM elements with jQuery
- Handle events and user interactions
- Make AJAX requests (GET, POST, DELETE)
- Implement pagination
- Create dynamic forms
- Handle API responses and errors

## 📁 Project Structure

```
holbertonschool-web_front_end/JQuery_advanced/
├── 0-index.html          # jQuery loading verification
├── 1-index.html          # Create text element
├── 2-index.html          # Create family tree (basic)
├── 3-index.html          # Create family tree (chained)
├── 4-index.html          # Replace HTML content
├── 5-index.html          # Click and remove elements
├── 6-index.html          # Dynamic form with member addition
├── 7-index.html          # Wikipedia search with AJAX
├── 8-index.html          # Wikipedia search with pagination
├── 9-index.html          # Wikipedia search with loading state
├── 10-index.html         # Get posts from API
├── 11-index.html         # Post data to API
├── 12-index.html         # Delete posts from API
├── db.json               # JSON server database
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (for json-server)
- Text editor or IDE

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Matzuc2/holbertonschool-web_front_end.git
cd holbertonschool-web_front_end/JQuery_advanced
```

2. Install json-server globally:
```bash
npm install -g json-server
```

Or locally:
```bash
npm install json-server
```

3. Start the JSON server:
```bash
json-server --watch db.json --port 3000
```

Or with npx:
```bash
npx json-server --watch db.json --port 3000
```

4. Open the HTML files in your browser

## 📚 Tasks Description

### Task 0: Setup Your Dev Environment
- Load jQuery from CDN
- Verify jQuery is loaded correctly
- Log jQuery version to console
- **File**: `0-index.html`

### Task 1: Creating a DOM Element
- Create a paragraph element with jQuery
- Append it to the body
- **File**: `1-index.html`

### Task 2: Creating Multiple DOM Elements at Once
- Build a family tree table using HTML string
- Append entire table structure at once
- **File**: `2-index.html`

### Task 3: Chain DOM Elements
- Create the same table using jQuery chaining
- More efficient and readable code
- **File**: `3-index.html`

### Task 4: HTML Function
- Replace table body content using `.html()`
- Demonstrate content replacement
- **File**: `4-index.html`

### Task 5: Click Attribute and Remove Function
- Add clickable delete buttons to table rows
- Remove table rows on click
- **File**: `5-index.html`

### Task 6: Val, Before, and Prepend Functions
- Create dynamic form with inputs and select
- Add members before or after existing ones
- Style form elements with CSS
- **File**: `6-index.html`

### Task 7: Query - Setup Your Dev Environment
- Implement Wikipedia search functionality
- Display search results with AJAX
- Use JSONP for cross-origin requests
- **File**: `7-index.html`

### Task 8: Pagination
- Add pagination to Wikipedia search
- Navigate between result pages
- Calculate offsets dynamically
- Highlight current page
- **File**: `8-index.html`

### Task 9: Wrap/Unwrap
- Add loading state visual feedback
- Use `.wrap()` and `.unwrap()` methods
- Reduce opacity during loading
- **File**: `9-index.html`

### Task 10: Another Get API
- Fetch posts from local JSON server
- Display posts dynamically
- Handle server errors with alerts
- **File**: `10-index.html`

### Task 11: Post Query
- Create form to submit new posts
- Handle POST requests to API
- Send data as JSON
- Display success/error messages
- **File**: `11-index.html`

### Task 12: Delete Query
- Add delete functionality for posts
- Remove posts from DOM and server
- Use unique IDs for targeting elements
- **File**: `12-index.html`

## 🔧 Key Features

### DOM Manipulation
- Creating elements with `$()`
- Chaining methods for cleaner code
- Using `.append()`, `.prepend()`, `.before()`, `.after()`
- Removing elements with `.remove()`
- Replacing content with `.html()`

### Event Handling
- Click events with `.click()`
- Form submission with `.submit()`
- Event delegation for dynamic elements
- Preventing default behavior with `e.preventDefault()`

### AJAX Operations
- GET requests with `$.get()` and `$.ajax()`
- POST requests with `$.post()` and `$.ajax()`
- DELETE requests with `$.ajax()`
- JSONP for cross-origin requests (Wikipedia API)
- Error handling with `.fail()`
- Success callbacks with `.done()`
- Chaining AJAX methods

### Styling & Effects
- Dynamic CSS with `.css()`
- Adding/removing classes
- Visual feedback for loading states
- Wrapping elements for styling

## 🌐 API Endpoints

### JSON Server (localhost:3000)
- `GET /posts` - Retrieve all posts
- `POST /posts` - Create a new post
  - Body: `{ "title": "...", "author": "..." }`
- `DELETE /posts/:id` - Delete a specific post

### Wikipedia API
- Endpoint: `https://en.wikipedia.org/w/api.php`
- Parameters:
  - `action`: `query`
  - `list`: `search`
  - `srsearch`: search term
  - `sroffset`: pagination offset
  - `format`: `json`
- Response format: JSONP

## 💡 Best Practices Demonstrated

1. **jQuery Ready Function**: All scripts wrapped in `$(document).ready()`
2. **Method Chaining**: Efficient DOM manipulation
3. **Event Delegation**: Attaching events to dynamically created elements
4. **Error Handling**: Using `.fail()` for AJAX errors
5. **Separation of Concerns**: Functions for specific tasks
6. **User Feedback**: Loading states and alerts
7. **Clean Code**: Consistent formatting and naming
8. **Content Type**: Proper JSON headers for POST requests

## 🐛 Troubleshooting

### JSON Server Issues
```bash
# If port 3000 is busy, use a different port
json-server --watch db.json --port 3001
```
Update the URLs in the HTML files accordingly.

### JSON Server Not Found
If you get "command not found":
```bash
# Use npx instead
npx json-server --watch db.json
```

### CORS Errors
Ensure json-server is running on the same machine and the correct port. JSONP is used for Wikipedia API to avoid CORS issues.

### jQuery Not Loading
- Check your internet connection
- Verify the CDN URL is correct
- Try a different CDN or download jQuery locally

### POST Request Sending URL-Encoded Data
Make sure to specify:
```javascript
contentType: "application/json"
data: JSON.stringify(data)
```

### Pagination Not Working
- Verify `sroffset` parameter is being sent
- Check `response.query.searchinfo.totalhits` path
- Ensure offset calculation is correct: `number * 10`

## 📖 Resources

- [jQuery Documentation](https://api.jquery.com/)
- [jQuery CDN](https://code.jquery.com/)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [Wikipedia API Documentation](https://www.mediawiki.org/wiki/API:Main_page)
- [JSONP Explained](https://en.wikipedia.org/wiki/JSONP)

## 📝 Author

**Matzuc2**
- GitHub: [@Matzuc2](https://github.com/Matzuc2)

## 📄 License

This project is part of the Holberton School curriculum.

---

**Note**: This project uses jQuery 3.7.1 from the official jQuery CDN. Tasks 0-6 use the slim build (without AJAX), while tasks 7-12 use the full build for AJAX functionality.

**Happy coding!** 🚀