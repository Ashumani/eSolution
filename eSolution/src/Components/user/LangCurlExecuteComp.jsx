import { arrayIndex, generators, lang } from "../../Utils"
import SyntaxHighLighter from "./SyntaxHighLighter"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
function LangCurlExecuteComp({ apiData }) {
    const [sampleRes, setSampleRes] = useState(null);
    const [sampleReq, setSampleReq] = useState(null);
    const { category_id } = useParams();
    const generateLangReq = (lang) => {
        let _d = JSON.parse(JSON.stringify(apiData))
        _d.body = JSON.stringify(_d.body, null, 2)
        let res = generators[lang](_d);
        setSampleReq(res);
    }
    const genrateCodeRes = (code) => {
        if (code) {
            try {
                let res = apiData.response.filter((c) => c.statusCode == code);
                setSampleRes(res[0].response);
            } catch (error) {
                setSampleRes({});
            }
        } else {
            setSampleRes({});
        }
    }
    useEffect(() => {
        generateLangReq('curl')
    }, [apiData.api_id, category_id])
    return (
        <div>
            <div className="card my-3">
                <div className="card-body d-flex align-items-center p-2">
                    <small className="me-2">{apiData.method}</small>
                    <small className="word-break">{apiData.url}</small>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header bg-white">
                    <h5>Languages you can test</h5>
                </div>
                <div className="card-body">
                    <div className="language-tabs">
                        {lang.map((item, i) => (
                            <button className="span-btn" key={arrayIndex('lang', i)} onClick={() => { generateLangReq(item.lang) }}>
                                <img src={`/assets/img/lang/${item.img}.png`} alt={item.lang}
                                    className={`language-tab`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Request Sample</h5>
                        <button className='span-btn'><img src="/assets/img/copy.png" alt="copy" /></button>
                    </div>
                </div>
                <div className="card-body">
                    <SyntaxHighLighter jsonString={sampleReq} />
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header bg-white">
                    <h5>Status Code</h5>
                </div>
                <div className="card-body">
                    <select className="form-select" onChange={(e) => { genrateCodeRes(e.target.value) }}>
                        <option value="">Select status Code</option>
                        <option value="200">200</option>
                        <option value="400">400</option>
                        <option value="401">401</option>
                        <option value="404">404</option>
                        <option value="500">500</option>
                    </select>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Response Sample</h5>
                        <button className='span-btn'><img src="/assets/img/copy.png" alt="copy" /></button>
                    </div>
                </div>
                <div className="card-body">
                    <SyntaxHighLighter jsonString={JSON.stringify(sampleRes || {}, null, 2)} />
                </div>
            </div>
        </div>
    )
}

LangCurlExecuteComp.propTypes = {
    apiData: PropTypes.any,
}

export default LangCurlExecuteComp
