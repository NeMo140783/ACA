// js/auth.js
// Handles User Authentication and Session Management

async function signUp(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
    });
    if (error) {
        console.error('Sign Up Error:', error.message);
        alert('Error: ' + error.message);
    } else {
        alert('Verification email sent! Check your inbox.');
        window.location.href = 'dashboard.html';
    }
}

async function signIn(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) {
        console.error('Sign In Error:', error.message);
        alert('Error: ' + error.message);
    } else {
        window.location.href = 'dashboard.html';
    }
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
        window.location.href = 'index.html';
    }
}

// Session checker for protected routes
async function checkSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session && window.location.pathname.includes('dashboard.html')) {
        window.location.href = 'index.html'; // Redirect to home if not logged in
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes('dashboard.html')) checkSession();
});

