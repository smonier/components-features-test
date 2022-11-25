window.jahia.i18n.loadNamespaces('components-features-test');

window.jahia.uiExtender.registry.add('callback', 'customEventPickerRegistration', {
    //Content-Editor initialisation callback as a priority of 2
    targets: ['jahiaApp-init:33'],
    callback: () => {
        const registry = window.jahia.uiExtender.registry;

        registry.add('pickerConfiguration', 'custom-event-picker', {
            pickerInput: {
                emptyLabel: 'components-features-test:label.picker.empty',
                notFoundLabel: 'components-features-test:label.picker.notFound',
            },
            pickerDialog: {
                view: 'List',
                dialogTitle: 'components-features-test:label.picker.title',
                displayTree: true,
                displaySiteSwitcher: false,
                displaySearch: true
            },
            searchContentType: 'jnt:event',
            selectableTypesTable: ['jnt:event'],
            accordions: ['picker-pages', 'picker-content-folders'],
            accordionItem: {
                "picker-pages": {
                    tableConfig: {
                        fragments: [{
                            gql: jahia.graphqlTag('fragment MyProp on JCRNode { eventsType: property(name: "eventsType") { value:choicelistValue(renderer:"resourceBundle", language: $language) }, startDate: property(name: "startDate") { value }, endDate: property(name: "endDate") { value }}'),
                            applyFor: 'node'
                        }],
                        columns: ["publicationStatus", "name", {
                            id: 'event-type',
                            accessor: row => row.eventsType && row.eventsType.value,
                            label: 'components-features-test:label.picker.type',
                            sortable: true,
                            property: 'eventsType.value'
                            },
                            {
                                id: 'start-date',
                                accessor: row => row.startDate && new Date(row.startDate.value).toLocaleDateString(),
                                label: 'components-features-test:label.picker.startDate',
                                width: '150px',
                                sortable: true,
                                property: 'startDate.value'
                            },
                            {
                                id: 'end-date',
                                accessor: row => row.endDate && new Date(row.endDate.value).toLocaleDateString(),
                                label: 'components-features-test:label.picker.endDate',
                                width: '150px',
                                sortable: true,
                                property: 'endDate.value'
                            }
                        ]
                    },
                    treeConfig: {
                        hideRoot: true
                    },
                    rootPath: "/sites/digitall",
                },
            "picker-content-folders": {
                    tableConfig: {
                        fragments: [{
                            gql: jahia.graphqlTag('fragment MyProp on JCRNode { eventsType: property(name: "eventsType") { value:choicelistValue(renderer:"resourceBundle", language: $language) }, startDate: property(name: "startDate") { value }, endDate: property(name: "endDate") { value }}'),
                            applyFor: 'node'
                        }],
                        columns: ["publicationStatus", "name", {
                            id: 'event-type',
                            accessor: row => row.eventsType && row.eventsType.value,
                            label: 'components-features-test:label.picker.type',
                            sortable: true,
                            property: 'eventsType.value'
                        },
                            {
                                id: 'start-date',
                                accessor: row => row.startDate && new Date(row.startDate.value).toLocaleDateString(),
                                label: 'components-features-test:label.picker.startDate',
                                width: '150px',
                                sortable: true,
                                property: 'startDate.value'
                            },
                            {
                                id: 'end-date',
                                accessor: row => row.endDate && new Date(row.endDate.value).toLocaleDateString(),
                                label: 'components-features-test:label.picker.endDate',
                                width: '150px',
                                sortable: true,
                                property: 'endDate.value'
                            }]
                    },
                    rootPath: "/sites/digitall/contents/events",
                    treeConfig: {
                        hideRoot: false
                    },
                    label: "Events content folder"
                }
            }
        });
    }
});

