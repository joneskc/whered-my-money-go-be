// From Dan's Guides: https://github.com/justsml/guides/tree/master/express

// IMPORTANT: CHECK `TODO` NOTICES BELOW!!!

// TODO: Import KNEX CONNECTION OBJECT
const knex = require('../db/knex') // TODO: Adjust path as needed!

// RESTful Knex Router Template:
const router = module.exports = require('express').Router();

router.get('/', getAll)
router.get('/:id', getOneUserBills)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

// TODO: Don't forget data validation/restrictions:
// - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one

// OPTIONAL/TODO: Move `getQueryOptions` into some shared js file
function getQueryOptions(query) {
    let { offset, limit } = query
    offset = parseInt(offset, null)
    limit = parseInt(limit, null)
    offset = offset > 2000 ? 2000 : offset
    limit = limit > 50 ? 50 : limit
    return { offset, limit }
}

function getAll(req, res, next) {
    const { limit, offset } = getQueryOptions(req.query)
    knex('bills')
        .select('*')
        .limit(limit)
        .offset(offset)
        .then(bills => res.status(200).send({ data: bills }))
        .catch(next)
}

function getOneUserBills(req, res, next) {
    knex('bills')
        .select('*')
        .where({ userId: req.params.id })
        .orderBy('dueDate', 'desc')
        .then((bill) => {
            if (!bill) return res.status(404).send({ message: 'bill not found.' })
            res.status(200).send({ data: bill })
        })
        .catch(next)
}

function create(req, res, next) {
    // TODO: Validate input data
    knex('bills')
        .insert(req.body)
        .then(() => res.status(201).json({ data: req.body }))
        .catch(next)
}

function update(req, res, next) {
    // TODO: Validate input data
    knex('bills')
        .where({ id: req.params.id })
        .update(req.body)
        .then(count => count >= 1
            ? res.status(200).json({ data: req.body })
            : res.status(410).json())
        .catch(next)
}

function remove(req, res, next) {
    // TODO: Validate authentication
    knex('bills').where({ id: req.params.id })
        .delete()
        .then(count => count >= 1
            ? res.status(204).json()
            : res.status(404).json({ message: 'Nothing deleted!' }))
        .catch(next)
}
