function redirectByLanguage() 
{
    var userLanguage = navigator.language || navigator.userLanguage;
    var languageCode = userLanguage.substring(0, 2);

    if (languageCode === 'es') 
    {
        window.location.href = 'index.html'; 
    } 
    
    else 
    {
        window.location.href = 'index_english.html'; 
    }
}
