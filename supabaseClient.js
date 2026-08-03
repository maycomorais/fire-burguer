// supabaseClient.js
// ─────────────────────────────────────────────────────────────
// Preencha com os dados do seu projeto no Supabase:
//   supabase.com → Settings → API
// ─────────────────────────────────────────────────────────────

const _SUPABASE_URL = 'https://iqnwrznrnuqtwqzzpyol.supabase.co';
const _SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxbndyem5ybnVxdHdxenpweW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3NDAxNTQsImV4cCI6MjEwMTMxNjE1NH0.xgWTCgy6aYhlo-6dju7wkmV49XxsXsRTM0rgIa0lNxU';

if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.error('ERRO CRÍTICO: Biblioteca Supabase não carregou. Verifique sua conexão.');
    // Não usa alert() — apenas loga. O checkUser() vai redirecionar para login se supa for null.
} else {
    window.supa = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);
    console.log('Banco iniciado.');
}

async function checkUser() {
    try {
        if (!window.supa) {
            console.error('checkUser: cliente Supabase não inicializado.');
            window.location.href = 'login.html';
            return null;
        }
        const { data: { session } } = await window.supa.auth.getSession();
        if (!session) {
            window.location.href = 'login.html';
            return null;
        }
        return session;
    } catch(e) {
        console.error('checkUser error:', e);
        window.location.href = 'login.html';
        return null;
    }
}