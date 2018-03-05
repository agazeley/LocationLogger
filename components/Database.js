import React, {Component} from 'react';
import {SQLite} from 'expo';

module.exports = SQLite.openDatabase('loc_db.db');