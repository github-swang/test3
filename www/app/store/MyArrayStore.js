/*
 * File: app/store/MyArrayStore.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.MyArrayStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array',
        'Ext.data.Field'
    ],

    config: {
        data: [
            {
                name: 'quam'
            },
            {
                name: 'dolorem'
            },
            {
                name: 'et'
            },
            {
                name: 'suscipit'
            },
            {
                name: 'vero'
            },
            {
                name: 'molestiae'
            },
            {
                name: 'ea'
            },
            {
                name: 'et'
            },
            {
                name: 'ea'
            },
            {
                name: 'delectus'
            },
            {
                name: 'amet'
            },
            {
                name: 'quidem'
            },
            {
                name: 'esse'
            },
            {
                name: 'at'
            },
            {
                name: 'quidem'
            },
            {
                name: 'modi'
            },
            {
                name: 'laborum'
            },
            {
                name: 'maiores'
            },
            {
                name: 'provident'
            },
            {
                name: 'quas'
            },
            {
                name: 'aliquam'
            },
            {
                name: 'excepturi'
            },
            {
                name: 'aliquam'
            },
            {
                name: 'aliquam'
            },
            {
                name: 'enim'
            },
            {
                name: 'voluptatem'
            },
            {
                name: 'ut'
            },
            {
                name: 'et'
            },
            {
                name: 'quis'
            },
            {
                name: 'accusantium'
            }
        ],
        storeId: 'MyArrayStore',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'array'
            }
        },
        fields: [
            {
                name: 'name'
            }
        ]
    }
});