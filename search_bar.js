function searchEpisode() {
  let input, filter, podcasts, episode_info, a, i, txtValue;
  input = document.getElementById("search_episode_input");
  filter = input.value.toUpperCase();
  podcasts = document.getElementById("podcasts");
  episode_info = podcasts.getElementsByTagName("p");

  //On parcours le contenu de toutes les balises <p>
  //et on cache ceux qui ne corresponde pas à la recherche
  for (i = 0; i < episode_info.length; i++) {
    a = episode_info[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      episode_info[i].style.display = "";
    } else {
      episode_info[i].style.display = "none";
    }
  }
}
