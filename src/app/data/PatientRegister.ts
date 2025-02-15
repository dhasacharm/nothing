export const RegisterForm = [
    {
        "heading": "Patient Info",
        "fromValues": [
            {
                "dropdown": true,
                "lable": "Type",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "placeholder": "Enter Your Email",
                "required": false,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },
            {
                "dropdown": true,
                "lable": "Title",
                "type": "text",
                "class": "form-control",
                "name": "TitleId",
                "placeholder": "Enter Your Email",
                "required": true,
                "dropdownValue": [{ "label": "Mr.", value: "Mr." },{ "label": "Mrs.", value: "Mrs." },{ "label": "Ms.", value: "Ms." },{ "label": "BABY OF.", value: "BABY OF." },{ "label": "MASTER.", value: "MASTER." },{ "label": "Dr", value: "Dr" },{ "label": "BABY.", value: "BABY." },{ "label": "RREV.BROTHER.", value: "RREV.BROTHER." },{ "label": "TEAM", value: "TEAM" },{ "label": "investigation", value: "investigation" },{ "label": "Dr.", value: "Dr." }]
            },
            {
                "dropdown": false,
                "lable": "First Name",
                "type": "text",
                "class": "form-control",
                "name": "FirstName",
                "required": true,
            },
            {
                "dropdown": false,
                "lable": "Middle Name",
                "type": "text",
                "class": "form-control",
                "name": "MiddleName",
                "required": false,
            },
            {
                "dropdown": false,
                "lable": "Last Name",
                "type": "text",
                "class": "form-control",
                "name": "LastName",
                "required": true,
            },
            {
                "dropdown": false,
                "lable": "Alias Name",
                "type": "text",
                "class": "form-control",
                "name": "AliasName",
                "required": false,
            },
            {
                "dropdown": false,
                "lable": " Age",
                "type": "number",
                "class": "form-control",
                "name": "Age",
                "required": false,
            },
            {
                "dropdown": false,
                "lable": "DOB",
                "type": "date",
                "class": "form-control",
                "name": "DOB",
                "placeholder": "12/02/2025",
                "required": true,
            },
            {
                "dropdown": true,
                "lable": "Gender",
                "type": "text",
                "class": "form-control",
                "name": "Gender",
                // "placeholder": "Enter Your Email",
                "required": true,
                "dropdownValue": [{ "label": "FEMALE", value: "FEMALE" }, {"label":"MALE",value:"MALE"},{"label":"TRANSGENDER",value:"TRANSGENDER"}]
            },
            {
                "dropdown":false,
                "lable": "Mobile",
                "type": "number",
                "class": "form-control",
                "name": "Mobile",
                "required": true,
            },
            {
                "dropdown": false,
                "lable": "Email",
                "type": "email",
                "class": "form-control",
                "name": "Email",
                "required": false,
            },
            {
                "dropdown": true,
                "lable": "Marital Status",
                "type": "text",
                "class": "form-control",
                "name": "MaritalStatus",
                "required": true,
                "dropdownValue": [{ "label": "MARRIED", value: "MARRIED" }, {"label":"SINGLE",value:"SINGLE"},{"label":"DIVORCED",value:"DIVORCED"},{"label":"SEPARATED",value:"SEPARATED"},{"label":"NOT CODED",value:"NOT CODED"},{"label":"UNKNOWN",value:"UNKNOWN"},{"label":"WIDOWED",value:"WIDOWED"}]
            },
            {
                "dropdown": true,
                "lable": "Spouse Type",
                "type": "text",
                "class": "form-control",
                "name": "SpouseType",
                "required": false,
                "dropdownValue": [{ "label": "AUNTY", value: "AUNTY" }, {"label":"BOYFRIEND",value:"BOYFRIEND"},{"label":"BROTHER",value:"BROTHER"},{"label":"BROTHER-IN-LAW",value:"BROTHER-IN-LAW"},{"label":"COLLEAGUE",value:"COLLEAGUE"},{"label":"COUSIN",value:"COUSIN"},{"label":"DAUGHTER",value:"DAUGHTER"},{"label":"DAUGHTER-IN-LAW",value:"DAUGHTER-IN-LAW"},{"label":"EMPLOYER",value:"EMPLOYER"},{"label":"FATHER",value:"FATHER"},{"label":"FATHER-IN-LAW",value:"FATHER-IN-LAW"},{"label":"FIANCEE",value:"FIANCEE"},{"label":"FRIEND",value:"FRIEND"},{"label":"GIRLFRIEND",value:"GIRLFRIEND"},{"label":"GRANDCHILD",value:"GRANDCHILD"},{"label":"GRANDDAUGHTER",value:"GRANDDAUGHTER"},{"label":"GRANDFATHER",value:"GRANDFATHER"},{"label":"GRANDMOTHER",value:"GRANDMOTHER"},{"label":"GRANDSON",value:"GRANDSON"},{"label":"IN-LAWS",value:"IN-LAWS"},{"label":"MOTHER",value:"MOTHER"},{"label":"MOTHER-IN-LAW",value:"MOTHER-IN-LAW"},{"label":"NEIGHBOR",value:"NEIGHBOR"},{"label":"NEPHEW",value:"NEPHEW"},{"label":"NIECE",value:"NIECE"},{"label":"OTHERS",value:"OTHERS"},{"label":"PARTNER",value:"PARTNER"},{"label":"SELF",value:"SELF"},{"label":"SISTER",value:"SISTER"},{"label":"SISTER-IN-LAW",value:"SISTER-IN-LAW"},{"label":"SON",value:"SON"},{"label":"SON-IN-LAW",value:"SON-IN-LAW"},{"label":"SPOUSE",value:"SPOUSE"},{"label":"UNCLE",value:"UNCLE"},{"label":"HUSBAND",value:"HUSBAND"},{"label":"WIFE",value:"WIFE"}]
            },
            {
                "dropdown": false,
                "lable": "Spouse Name",
                "type": "text",
                "class": "form-control",
                "name": "SpouseName",
                "required": false,
            },
            {
                "dropdown": true,
                "lable": "Ethnicity",
                "type": "text",
                "class": "form-control",
                "name": "Ethnicity",
                "required": false,
                "dropdownValue": [{ "label": "HINDUISM", value: "HINDUISM" }, {"label":"CONFUCIANISM",value:"CONFUCIANISM"},{ "label": "BUDDHISM", value: "BUDDHISM" }, {"label":"CHRISTIANITY",value:"CHRISTIANITY"},{ "label": "ISLAM", value: "ISLAM" }, {"label":"OTHERS",value:"OTHERS"},{ "label": "SHINTO", value: "SHINTO" }, {"label":"SIKHISM",value:"SIKHISM"},{ "label": "TAOISM", value: "TAOISM" },]
            },
            {
                "dropdown": true,
                "lable": "Nationality",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "required": true,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },
             {
                "dropdown": true,
                "lable": "Type",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "placeholder": "Enter Your Email",
                "required": false,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },
            {
                "dropdown": true,
                "lable": "Type",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "placeholder": "Enter Your Email",
                "required": false,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },
            {
                "dropdown": true,
                "lable": "Type",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "placeholder": "Enter Your Email",
                "required": false,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },
            {
                "dropdown": true,
                "lable": "Type",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "placeholder": "Enter Your Email",
                "required": false,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },
            {
                "dropdown": true,
                "lable": "Type",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "placeholder": "Enter Your Email",
                "required": false,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },
            {
                "dropdown": true,
                "lable": "Type",
                "type": "text",
                "class": "form-control",
                "name": "Types",
                "placeholder": "Enter Your Email",
                "required": false,
                "dropdownValue": [{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
            },


        ]
    }
]

export const dropdownValue = [
    {
        name:"Types",
        value:[{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
    },
    {
        name:"Title",
        value:[{ "label": "Mr.", value: "Mr." },{ "label": "Mrs.", value: "Mrs." },{ "label": "Ms.", value: "Ms." },{ "label": "BABY OF.", value: "BABY OF." },{ "label": "MASTER.", value: "MASTER." },{ "label": "Dr", value: "Dr" },{ "label": "BABY.", value: "BABY." },{ "label": "RREV.BROTHER.", value: "RREV.BROTHER." },{ "label": "TEAM", value: "TEAM" },{ "label": "investigation", value: "investigation" },{ "label": "Dr.", value: "Dr." }]
    },
    {
        name:"Gender",
        value:[{ "label": "FEMALE", value: "FEMALE" }, {"label":"MALE",value:"MALE"},{"label":"TRANSGENDER",value:"TRANSGENDER"}]
    },
    {
        name:"Marital Status",
        value:[{ "label": "MARRIED", value: "MARRIED" }, {"label":"SINGLE",value:"SINGLE"},{"label":"DIVORCED",value:"DIVORCED"},{"label":"SEPARATED",value:"SEPARATED"},{"label":"NOT CODED",value:"NOT CODED"},{"label":"UNKNOWN",value:"UNKNOWN"},{"label":"WIDOWED",value:"WIDOWED"}]
    },
    {
        name:"Spouse Type",
        value:[{ "label": "AUNTY", value: "AUNTY" }, {"label":"BOYFRIEND",value:"BOYFRIEND"},{"label":"BROTHER",value:"BROTHER"},{"label":"BROTHER-IN-LAW",value:"BROTHER-IN-LAW"},{"label":"COLLEAGUE",value:"COLLEAGUE"},{"label":"COUSIN",value:"COUSIN"},{"label":"DAUGHTER",value:"DAUGHTER"},{"label":"DAUGHTER-IN-LAW",value:"DAUGHTER-IN-LAW"},{"label":"EMPLOYER",value:"EMPLOYER"},{"label":"FATHER",value:"FATHER"},{"label":"FATHER-IN-LAW",value:"FATHER-IN-LAW"},{"label":"FIANCEE",value:"FIANCEE"},{"label":"FRIEND",value:"FRIEND"},{"label":"GIRLFRIEND",value:"GIRLFRIEND"},{"label":"GRANDCHILD",value:"GRANDCHILD"},{"label":"GRANDDAUGHTER",value:"GRANDDAUGHTER"},{"label":"GRANDFATHER",value:"GRANDFATHER"},{"label":"GRANDMOTHER",value:"GRANDMOTHER"},{"label":"GRANDSON",value:"GRANDSON"},{"label":"IN-LAWS",value:"IN-LAWS"},{"label":"MOTHER",value:"MOTHER"},{"label":"MOTHER-IN-LAW",value:"MOTHER-IN-LAW"},{"label":"NEIGHBOR",value:"NEIGHBOR"},{"label":"NEPHEW",value:"NEPHEW"},{"label":"NIECE",value:"NIECE"},{"label":"OTHERS",value:"OTHERS"},{"label":"PARTNER",value:"PARTNER"},{"label":"SELF",value:"SELF"},{"label":"SISTER",value:"SISTER"},{"label":"SISTER-IN-LAW",value:"SISTER-IN-LAW"},{"label":"SON",value:"SON"},{"label":"SON-IN-LAW",value:"SON-IN-LAW"},{"label":"SPOUSE",value:"SPOUSE"},{"label":"UNCLE",value:"UNCLE"},{"label":"HUSBAND",value:"HUSBAND"},{"label":"WIFE",value:"WIFE"}]
    },
    {
        name:"Ethnicity",
        value:[{ "label": "HINDUISM", value: "HINDUISM" }, {"label":"CONFUCIANISM",value:"CONFUCIANISM"},{ "label": "BUDDHISM", value: "BUDDHISM" }, {"label":"CHRISTIANITY",value:"CHRISTIANITY"},{ "label": "ISLAM", value: "ISLAM" }, {"label":"OTHERS",value:"OTHERS"},{ "label": "SHINTO", value: "SHINTO" }, {"label":"SIKHISM",value:"SIKHISM"},{ "label": "TAOISM", value: "TAOISM" },]
    },
    {
        name:"Types",
        value:[{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
    },
    {
        name:"Types",
        value:[{ "label": "MRN", value: "MRN" }, {"label":"TEMP",value:"TEMP"}]
    },
]

