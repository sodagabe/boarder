import Product from "./product";

class Game extends Product {
  #avg_rating;
  #categoryIDs;
  #designerIDs;
  #max_players;
  #max_players_rec;
  #max_time;
  #mechanicIDs;
  #min_age;
  #min_age_rec;
  #min_players;
  #min_players_rec;
  #min_time;
  #publisherIDs;
  #rank;
  #typeIDs;
  #year;

  constructor({
    id,
    title,
    thumbnailURL,
    price,
    avg_rating,
    categoryIDs,
    designerIDs,
    max_players,
    max_players_rec,
    max_time,
    mechanicIDs,
    min_age,
    min_age_rec,
    min_players,
    min_players_rec,
    min_time,
    publisherIDs,
    rank,
    typeIDs,
    year,
  }) {
    super({
      id: id,
      title: title,
      thumbnailURL: thumbnailURL,
      price: price,
      categoryID: categoryIDs[0],
    });
    this.#avg_rating = avg_rating;
    this.#categoryIDs = categoryIDs;
    this.#designerIDs = designerIDs;
    this.#max_players = max_players;
    this.#max_players_rec = max_players_rec;
    this.#max_time = max_time;
    this.#mechanicIDs = mechanicIDs;
    this.#min_age = min_age;
    this.#min_age_rec = min_age_rec;
    this.#min_players = min_players;
    this.#min_players_rec = min_players_rec;
    this.#min_time = min_time;
    this.#publisherIDs = publisherIDs;
    this.#rank = rank;
    this.#typeIDs = typeIDs;
    this.#year = year;
  }

  get avg_rating() {
    return this.#avg_rating;
  }

  get categoryIDs() {
    return this.#categoryIDs;
  }

  get designerIDs() {
    return this.#designerIDs;
  }

  get max_players() {
    return this.#max_players;
  }

  get max_players_rec() {
    return this.#max_players_rec;
  }

  get max_time() {
    return this.#max_time;
  }

  get mechanicIDs() {
    return this.#mechanicIDs;
  }

  get min_age() {
    return this.#min_age;
  }

  get min_age_rec() {
    return this.#min_age_rec;
  }

  get min_players() {
    return this.#min_players;
  }

  get min_players_rec() {
    return this.#min_players_rec;
  }

  get min_time() {
    return this.#min_time;
  }

  get publisherIDs() {
    return this.#publisherIDs;
  }

  get rank() {
    return this.#rank;
  }

  get typeIDs() {
    return this.#typeIDs;
  }

  get year() {
    return this.#year;
  }
}

export default Game;
