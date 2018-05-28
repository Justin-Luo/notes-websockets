/* CS52 Lab 5 Part 1
 * Justin Luo May 2017\
 * Note Model */

import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field

const NoteSchema = new Schema({
  title: String,
  text: String,
  x: Number,
  y: Number,
  user: String,
  email: String,
}, {
});

// create PostModel class from schema
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
