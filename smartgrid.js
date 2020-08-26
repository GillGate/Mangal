const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '0px',
    container: {
        maxWidth: '1920px',
        fields: '85px'
    },
    breakPoints: {
        md: {
            width: "1024px",
            fields: "15px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/less', settings);