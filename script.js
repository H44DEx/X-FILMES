<script>
    document.getElementById('search-button').addEventListener('click', function() {
        var query = document.getElementById('search-input').value;
        if (query) {
            // Aqui você pode definir a ação desejada, como redirecionar para uma página de resultados.
            // Exemplo: Redireciona para uma página de pesquisa com a consulta
            window.location.href = 'search.html?q=' + encodeURIComponent(query);
        }
    });
</script>
