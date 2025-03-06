const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const mongooseDelete = require("mongoose-delete");

/**
 * Obtener todos los elementos de la base de datos
 */
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

/**
 * Obtener un solo item por ID
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await tracksModel.findById(id);
    if (!data) return handleHttpError(res, "Item no encontrado", 404);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

/**
 * Crear un nuevo item
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_CREATE_ITEM");
  }
};

/**
 * Actualizar un item existente
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findByIdAndUpdate(id, body, { new: true });
    if (!data) return handleHttpError(res, "Item no encontrado", 404);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_UPDATE_ITEM");
  }
};

/**
 * Eliminar un item (Soft Delete)
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await tracksModel.delete({ _id: id }); // Soft delete
    if (!data) return handleHttpError(res, "Item no encontrado", 404);
    res.send({ message: "Item eliminado correctamente" });
  } catch (err) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
