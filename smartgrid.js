const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '0px',
    container: {
        maxWidth: '1920px',
        fields: '85px'
    },
    breakPoints: {
        lg: {
            width: "1680px",
            fields: "68px"
        },
        mlg: {
            width: "1530px",
            fields: "68px"
        },
        slg: {
            width: "1440px",
            fields: "68px"
        },
        emd: {
            width: "1250px",
            fields: "68px"
        },
        smd: {
            width: "1120px",
            fields: "68px"
        },
        md: {
            width: "1024px",
            fields: "68px"
        },
        lsm: {
            width: "856px",
            fields: "68px"
        },
        sm: {
            width: "696px",
            fields: "48px"
        },
        xs: {
            width: "484px",
            fields: "10px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/less', settings);