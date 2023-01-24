window.addEventListener("load", () => {
  const podcast_form = document.querySelector("#new_podcast_form");
  const input_podcast_name = document.querySelector("#input_podcast_name");
  const input_podcast_image = document.querySelector("#input_podcast_image");
  const list_el = document.querySelector("#podcasts");

  //Formulaire d'ajout des podcasts

  podcast_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const podcast_name = input_podcast_name.value;
    const podcast_image = input_podcast_image.value;

    const podcast_el = document.createElement("div");
    podcast_el.classList.add("podcast");

    const podcast_content_el = document.createElement("div");
    podcast_content_el.classList.add("content");

    podcast_el.appendChild(podcast_content_el);

    const podcast_image_input_el = document.createElement("img");
    podcast_image_input_el.src = podcast_image;

    podcast_content_el.appendChild(podcast_image_input_el);

    const podcast_name_input_el = document.createElement("input");
    podcast_name_input_el.classList.add("text");
    podcast_name_input_el.type = "text";
    podcast_name_input_el.value = podcast_name;
    podcast_name_input_el.setAttribute("readonly", "readonly");

    podcast_content_el.appendChild(podcast_name_input_el);

    const podcast_actions_el = document.createElement("div");
    podcast_actions_el.classList.add("actions");

    const podcast_edit_el = document.createElement("button");
    podcast_edit_el.classList.add("edit");
    podcast_edit_el.innerText = "Modifier";

    const podcast_delete_el = document.createElement("button");
    podcast_delete_el.classList.add("delete");
    podcast_delete_el.innerText = "Supprimer";

    podcast_actions_el.appendChild(podcast_edit_el);
    podcast_actions_el.appendChild(podcast_delete_el);

    podcast_el.appendChild(podcast_actions_el);

    list_el.appendChild(podcast_el);

    input_podcast_name.value = "";
    input_podcast_image.value = "";

    podcast_edit_el.addEventListener("click", (e) => {
      if (podcast_edit_el.innerText.toLowerCase() == "modifier") {
        podcast_edit_el.innerText = "Sauvegarder";
        podcast_name_input_el.removeAttribute("readonly");
        podcast_name_input_el.focus();
      } else {
        podcast_edit_el.innerText = "Modifier";
        podcast_name_input_el.setAttribute("readonly", "readonly");
      }
    });

    podcast_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(podcast_el);
    });

    //Formulaire d'ajout des épisodes

    const episode_form = document.createElement("form");
    episode_form.classList.add("new_episode_form");

    podcast_el.appendChild(episode_form);

    const episode_title_input_el = document.createElement("input");
    episode_title_input_el.classList.add("input_episode_title");
    episode_title_input_el.type = "text";
    episode_title_input_el.placeholder = "Titre de l'épisode";

    episode_form.appendChild(episode_title_input_el);

    const episode_description_input_el = document.createElement("input");
    episode_description_input_el.classList.add("input_episode_description");
    episode_description_input_el.type = "text";
    episode_description_input_el.placeholder = "Description";

    episode_form.appendChild(episode_description_input_el);

    const episode_date_input_el = document.createElement("input");
    episode_date_input_el.classList.add("input_episode_date");
    episode_date_input_el.type = "date";
    episode_date_input_el.setAttribute("min", "2023-01-24");

    episode_form.appendChild(episode_date_input_el);

    const episode_form_submit_button = document.createElement("input");
    episode_form_submit_button.classList.add("new_episode_submit");
    episode_form_submit_button.type = "submit";
    episode_form_submit_button.value = "Ajouter un épisode";

    episode_form.appendChild(episode_form_submit_button);

    episode_form.addEventListener("submit", (e) => {
      e.preventDefault();

      const episode_list_el = document.createElement("div");
      episode_list_el.classList.add("episode_list");

      podcast_el.appendChild(episode_list_el);

      const episode_title = document.createElement("p");
      episode_title.innerText = episode_title_input_el.value;

      episode_list_el.appendChild(episode_title);

      const episode_description = document.createElement("p");
      episode_description.innerText = episode_description_input_el.value;

      episode_list_el.appendChild(episode_description);

      const episode_date = document.createElement("p");
      episode_date.innerText = episode_date_input_el.value;

      episode_list_el.appendChild(episode_date);

      episode_title_input_el.value = "";
      episode_description_input_el.value = "";
      episode_date_input_el.value = "";
    });
  });
});
