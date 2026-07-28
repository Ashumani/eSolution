import { ErrorMessage, FormikProvider, useFormik } from 'formik';
import { createApiSchema } from '../../Schema';
import { Form, Modal } from 'react-bootstrap';
import { apiMethods, arrayIndex } from '../../Utils';
import { useState } from 'react';
import RequestParamtereAdd from './RequestParamtereAdd';

function CreateApi() {
    const [show, setShow] = useState(false);
    const [modalType, setModalType] = useState('');
    const [modalvalue, setModalvalue] = useState(false);
    const apiForm = useFormik({
        initialValues: {
            "categoryid": 1,
            "subcategoryid": 1,
            "apiname": "Encryption & Decryption",
            "apiurl": "https://bajajauto.co.in/",
            "apimethod": "GET",
            "reqbody": [{ "key": "token", "value": "tokenvalue", "isrequired": true, "description": "description" }],
            "reqheader": [{ "key": "token", "value": "value", "isrequired": true, "description": "description" }],
            "resheader": [{ "key": "token", "value": "value", "isrequired": true, "description": "description" }],
            "reqsample": { "key": "token", "value": "value", "isrequired": true, "description": "description" },
            "reqschema": { "key": "token", "value": "value", "isrequired": true, "description": "description" },
            "responses": [{ "code": 200, "resbody": {}, "resschema": {} }],
            "description": "description"
        },
        validationSchema: createApiSchema,
        onSubmit: (values) => {
            console.log("Form submitted:", values);
            addSubCategory();
        },

    })

    const handleModal = (modalType) => {
        if (modalType == 'reqbody') {
            setModalvalue(apiForm.values.reqbody || [])
        }
        else if (modalType == 'reqheader') {
            setModalvalue(apiForm.values.reqheader || [])
        }
        setModalType(modalType);
        setShow(true);
    }

    return (
        <div>
            <FormikProvider value={apiForm}>
                <Form className="api-form" autoComplete="off">
                    <div className="card">
                        <h3 className="card-header">Basic Details</h3>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <label className="form-label" htmlFor="categoryid">Category</label>
                                    <select className="form-select" id="categoryid" name="categoryid"
                                        value={apiForm.values.categoryid}
                                        onChange={apiForm.handleChange}>
                                        <option value="">Select Method</option>
                                        {
                                            apiMethods.map((m, i) => (
                                                <option key={arrayIndex('category', i)} value={m.id}>{m.name}</option>
                                            ))
                                        }
                                    </select>
                                    <ErrorMessage name={"categoryid"} component="small" className='text-danger' />
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <label className="form-label" htmlFor="subcategoryid">Sub Category</label>
                                    <select className="form-select" id="subcategoryid" name="subcategoryid"
                                        value={apiForm.values.subcategoryid}
                                        onChange={apiForm.handleChange}>
                                        <option value="">Select Method</option>
                                        {
                                            apiMethods.map((m, i) => (
                                                <option key={arrayIndex('sub-category', i)} value={m.id}>{m.name}</option>
                                            ))
                                        }
                                    </select>
                                    <ErrorMessage name={"subcategoryid"} component="small" className='text-danger' />
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <label htmlFor="apiname" className="form-label" >Api Name</label>
                                    <input type="text" className='form-control' name='apiname'
                                        onChange={apiForm.handleChange} onBlur={apiForm.handleBlur}
                                        value={apiForm.values.apiname} />
                                    <ErrorMessage name="apiname" component="small" className='text-danger' />
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <label htmlFor="apiurl" className="form-label" >Api Url</label>
                                    <input type="text" className='form-control' name='apiurl'
                                        onChange={apiForm.handleChange} onBlur={apiForm.handleBlur}
                                        value={apiForm.values.apiurl} />
                                    <ErrorMessage name="apiurl" component="small" className='text-danger' />
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <label className="form-label" htmlFor="apimethod">Api Method</label>
                                    <select className="form-select" id="apimethod" name="apimethod"
                                        value={apiForm.values.apimethod}
                                        onChange={apiForm.handleChange}>
                                        <option value="">Select Method</option>
                                        {
                                            apiMethods.map((m, i) => (
                                                <option key={arrayIndex('api-method', i)} value={m.id}>{m.name}</option>
                                            ))
                                        }
                                    </select>
                                    <ErrorMessage name={"apimethod"} component="small" className='text-danger' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className=" card-header d-flex justify-content-between">
                            <h3 className="">Request Parameter</h3>
                            <button className='btn btn-primary' type='button' onClick={() => { handleModal('reqbody') }}>Add Parameter</button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Value</th>
                                        <th>Required</th>
                                        <th>description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiForm.values.reqbody.map((item, i) => (
                                            <tr key={arrayIndex('table-req-body', i)}>
                                                <td>{item.key}</td>
                                                <td>{item.value}</td>
                                                <td className="d-flex align-items-center justify-content-center">
                                                    <input style={{ height: "15px", width: "15px", margin: "5px 5px 8px 5px" }} checked={item.isrequired} type="checkbox" className='form-check' readOnly />
                                                </td>
                                                <td>{item.description}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className=" card-header d-flex justify-content-between">
                            <h3 className="">Request Headers</h3>
                            <button className='btn btn-primary' type='button' onClick={() => { handleModal('reqheader') }}>Add Parameter</button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Value</th>
                                        <th>Required</th>
                                        <th>description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiForm.values.reqheader.map((item, i) => (
                                            <tr key={arrayIndex('table-req-header', i)}>
                                                <td>{item.key}</td>
                                                <td>{item.value}</td>
                                                <td className="d-flex align-items-center justify-content-center">
                                                    <input style={{ height: "15px", width: "15px", margin: "5px 5px 8px 5px" }} checked={item.isrequired} type="checkbox" className='form-check' readOnly />
                                                </td>
                                                <td>{item.description}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className=" card-header d-flex justify-content-between">
                            <h3 className="">Response Headers</h3>
                            <button className='btn btn-primary' type='button' onClick={() => { handleModal('resheader') }}>Add Parameter</button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Value</th>
                                        <th>Required</th>
                                        <th>description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiForm.values.reqheader.map((item, i) => (
                                            <tr key={arrayIndex('table-req-header', i)}>
                                                <td>{item.key}</td>
                                                <td>{item.value}</td>
                                                <td className="d-flex align-items-center justify-content-center">
                                                    <input style={{ height: "15px", width: "15px", margin: "5px 5px 8px 5px" }} checked={item.isrequired} type="checkbox" className='form-check' readOnly />
                                                </td>
                                                <td>{item.description}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className=" card-header d-flex justify-content-between">
                            <h3 className="">Response Sample</h3>
                            <button className='btn btn-primary' type='button' onClick={() => { handleModal('resheader') }}>Add Parameter</button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Status Code</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiForm.values.responses.map((item, i) => (
                                            <tr key={arrayIndex('table-req-header', i)}>
                                                <td>{i + 1}</td>
                                                <td>{item.code}</td>
                                                <td><i className='fa fa-pencil'></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Form>
            </FormikProvider>
            <Modal size="xl" show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton className="border-bottom-0">
                    <h3>Request Parameter</h3>
                </Modal.Header>
                <Modal.Body className="pt-0">
                    {modalvalue && <RequestParamtereAdd modalvalue={modalvalue} setShow={setShow} modalType={modalType} apiForm={apiForm} />}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateApi
