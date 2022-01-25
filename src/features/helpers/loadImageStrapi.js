import { strapiFreshFast } from "utils/utils";
const imageSetup = (content) => {
    return content.split('/uploads/').join(`${strapiFreshFast}/uploads/` );
}
export default imageSetup