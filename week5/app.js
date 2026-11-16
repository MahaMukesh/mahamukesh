// Client-Side Router Implementation
const routes = {
    '/': {
        title: 'Home - Welcome',
        render: () => `
            <div class="spa-card fade-in">
                <h2>Home Page Dashboard</h2>
                <p>Welcome to our single page application mockup. This entire framework serves content transitions smoothly without causing structural page refreshes.</p>
                <p style="margin-top:10px;">Click through the navigation options to trigger historical URL changes dynamically using state pushes.</p>
            </div>
        `
    },
    '/services': {
        title: 'Our Services',
        render: () => `
            <div class="spa-card fade-in">
                <h2>Our Dynamic Offerings</h2>
                <p>We deliver lightning-fast interactive architectures tailored for complex workflows.</p>
                <div class="services-grid">
                    <div class="service-item">
                        <h4>SPA Consulting</h4>
                        <p>Planning fluid navigation states.</p>
                    </div>
                    <div class="service-item">
                        <h4>State Management</h4>
                        <p>Handling client-side transitions cleanly.</p>
                    </div>
                </div>
            </div>
        `
    },
    '/about': {
        title: 'About SPASim',
        render: () => `
            <div class="spa-card fade-in">
                <h2>About Us</h2>
                <p>Built with robust vanillajs routing scripts, proving you don't always need massive node frameworks to build responsive, light, and optimized client solutions.</p>
            </div>
        `
    }
};

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

function router() {
    const path = window.location.pathname;
    // Fallback simple routing logic matching root or defaults
    let route = routes[path];
    
    if (!route) {
        // Default fallback handling
        route = routes['/'];
    }
    
    document.title = route.title;
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = route.render();
    
    updateActiveLinks(path);
}

function updateActiveLinks(currentPath) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Capture anchor click events and reroute natively through SPA
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        }
    });
    router();
});
