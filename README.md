# 🚀 My Page Loaders Collection

A curated collection of 8 unique, high-performance page loaders built with HTML, CSS, and lightweight JavaScript. These loaders range from simple geometric animations to complex grid-based visual effects, perfect for any modern web project.

## 📂 Project Structure

Each loader is contained within its own directory for easy integration. Below is a breakdown of each loader and how it works:

| Loader | Name | Description | Folder Link |
|:---:|:---|:---|:---|
| 1 | **Classic Spin** | A simple, 4-color borders spinning circle with a smooth bottom-to-top content reveal. | [View Files](./Page%20Loader%201) |
| 2 | **Triple Ring Reveal** | Sophisticated concentric rings that spin at different speeds, featuring a dual-curtain sliding reveal for page content. | [View Files](./Page%20Loader%202) |
| 3 | **Text Drop** | An interactive text-based loader where characters drop from above with a 3D rotation effect. | [View Files](./Page%20Loader%203) |
| 4 | **Colliding Spheres** | Four vibrant colored balls (Blue, Pink, Yellow, Green) that collide and bounce in a centered container. | [View Files](./Page%20Loader%204) |
| 5 | **Chasing Dots** | Two pairs of shifting dots that expand and contract with scale transformations and shadow effects. | [View Files](./Page%20Loader%205) |
| 6 | **Geometric Shift** | Four squares that cycle through grid positions with a cubic-bezier transition for a "robotic" feel. | [View Files](./Page%20Loader%206) |
| 7 | **Fading Sequence** | A horizontal line of 7 gradient-colored dots that pulse with a staggered opacity animation. | [View Files](./Page%20Loader%207) |
| 8 | **Electric Hive** | A complex hexagonal grid (37+ elements) that pulses with scale and color shifts for a high-tech "socket" look. | [View Files](./Page%20Loader%208) |

---

## 🛠 How to Use (Standard Web)

To use any of these loaders in a standard HTML project, follow these steps:

### 1. HTML Structure
Wrap your main content in a container that is hidden by default, and add the loader markup at the top of your `<body>`.

```html
<!-- Loader Markup (Example from Loader 1) -->
<div id="loader"></div>

<!-- Your Main Content -->
<div style="display:none;" id="main-content" class="animate-bottom">
  <h1>Welcome!</h1>
  <p>The page has finished loading.</p>
</div>
```

### 2. CSS Integration
Link the specific `style.css` or `loader.css` from the loader folder in your `<head>`.

```html
<link rel="stylesheet" href="./Page Loader 1/loader.css">
```

### 3. JavaScript Activation
Use a simple timer or the `window.onload` event to transition from the loader to your content.

```javascript
window.addEventListener('load', () => {
    // Optional delay for demonstration
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000); 
});
```

---

## ⚛️ Turning into React Components

To turn these loaders into React components, you need to migrate both the specific **CSS animations** and the **HTML structure**. Since each loader has a unique footprint, here is the "correct" integration pattern.

### 1. The Dynamic Wrapper (`Loader.jsx`)
Create a single component that can handle the loading state for your app.

```jsx
import React, { useState, useEffect } from 'react';
// IMPORTANT: Import the specific CSS file for the loader you chose
// Example: if using Page Loader 1, copy its loader.css to your components folder
import './LoaderAnimation.css'; 

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for everything (images, scripts) to finish loading
    const handleLoad = () => setLoading(false);
    
    if (document.readyState === 'complete') {
        handleLoad();
    } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (loading) {
    return (
      /* 
         CRITICAL: You must use the EXACT HTML structure from the loader's index.html.
         Below is the structure for 'Page Loader 8' (Electric Hive).
      */
      <div id="socket">
        <div className="gel center-gel">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        {/* ... Paste the remaining 30+ bricks from loader 8 here ... */}
      </div>
    );
  }

  // Once loading is false, show the children (your app content)
  return <div className="animate-bottom">{children}</div>;
};

export default PageLoader;
```

### 2. Usage in Your App (`App.jsx`)
Now you can wrap your entire application or specific pages with the `PageLoader` component.

```jsx
import React from 'react';
import PageLoader from './components/Loader'; // Correctly import the component you just created

function App() {
  return (
    <PageLoader>
      <div className="app-container">
        <header>
           <h1>My Premium Dashboard</h1>
        </header>
        <main>
           <p>Content is now visible!</p>
        </main>
      </div>
    </PageLoader>
  );
}

export default App;
```



