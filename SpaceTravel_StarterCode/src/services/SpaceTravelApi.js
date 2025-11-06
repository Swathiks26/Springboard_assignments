// services/SpaceTravelApi.js
import SpaceTravelMockApi from "./SpaceTravelMockApi.js";

/**
 * Helper to call mock API and normalize response.
 * The mock returns { isError: boolean, data: any }.
 * If isError is true we throw an Error with the provided data (or a default message).
 * Otherwise return the data.
 */
async function wrap(fn, ...args) {
  const res = await fn(...args);

  if (!res) {
    throw new Error("No response from API");
  }

  if (res.isError) {
    // If mock provided an Error instance, keep its message
    const data = res.data;
    const message =
      data instanceof Error ? data.message : data?.message ?? String(data);
    throw new Error(message || "API Error");
  }

  return res.data;
}

class SpaceTravelApi {
  static async getPlanets() {
    return wrap(SpaceTravelMockApi.getPlanets);
  }

  static async getSpacecrafts() {
    return wrap(SpaceTravelMockApi.getSpacecrafts);
  }

  /**
   * Accepts either an id (string) or an object { id }.
   * Returns the spacecraft object.
   */
  static async getSpacecraftById(idOrObj) {
    const id =
      typeof idOrObj === "object" && idOrObj !== null ? idOrObj.id : idOrObj;
    if (id === undefined || id === null) {
      throw new Error("getSpacecraftById requires an id");
    }
    return wrap(SpaceTravelMockApi.getSpacecraftById, { id });
  }

  /**
   * Build a spacecraft.
   * Accepts either individual args as object { name, capacity, description, pictureUrl }
   * or parameters passed directly (object is recommended).
   *
   * pictureUrl may be a string or an array; the mock expects pictureUrl (it stores as-is).
   */
  static async buildSpacecraft({
    name,
    capacity,
    description,
    pictureUrl = undefined,
  } = {}) {
    if (!name || !description || capacity === undefined || capacity === null) {
      throw new Error("Missing required fields: name, capacity, description");
    }

    // Normalize pictureUrl: if array provided keep it, if string convert to array
    let payloadPicture = undefined;
    if (Array.isArray(pictureUrl)) payloadPicture = pictureUrl;
    else if (typeof pictureUrl === "string" && pictureUrl.trim() !== "")
      payloadPicture = [pictureUrl.trim()];

    return wrap(SpaceTravelMockApi.buildSpacecraft, {
      name,
      capacity: Number(capacity),
      description,
      pictureUrl: payloadPicture,
    });
  }

  /**
   * Destroy spacecraft by id. Accepts id or { id }.
   */
  static async destroySpacecraftById(idOrObj) {
    const id =
      typeof idOrObj === "object" && idOrObj !== null ? idOrObj.id : idOrObj;
    if (!id) {
      throw new Error("destroySpacecraftById requires an id");
    }
    return wrap(SpaceTravelMockApi.destroySpacecraftById, { id });
  }

  /**
   * Send spacecraft to planet.
   * Accepts { spacecraftId, planetId } (preferred).
   * Maps to the mock API shape { spacecraftId, targetPlanetId }.
   */
  static async sendSpacecraftToPlanet({ spacecraftId, planetId } = {}) {
    if (!spacecraftId)
      throw new Error("sendSpacecraftToPlanet requires spacecraftId");
    if (planetId === undefined || planetId === null)
      throw new Error("sendSpacecraftToPlanet requires planetId");
    return wrap(SpaceTravelMockApi.sendSpacecraftToPlanet, {
      spacecraftId,
      targetPlanetId: Number(planetId),
    });
  }
}

export default SpaceTravelApi;
