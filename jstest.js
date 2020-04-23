const str = "Dave Baker is an Elite {crew member|production crew member|video crew member}. This {designation|status|label|classification} by Assignment Desk is {an extra|an additional|a supplementary|yet another|one extra|one additional} {sign|mark|signal|indication|symbol|endorsement} of {quality|high quality|top quality|good quality|excellence|top notch quality|outstanding quality|superior quality|high-quality|value|superiority}. Elite {crews|crew members|production crew members|video crew members} {have been|are actually|are already|are entirely|have been completely} {vetted|checked} by Assignment Desk as {crew members|production crew members|video crew members|film staff} {that have been|who have been|which have been} on shoots {many times|often|frequently|repeatedly|on numerous occasions|again and again|many times before} with {quality|high quality|top notch|excellent} equipment. {You can trust that|You can rely on|You can be confident|You can depend on|Have confidence} that an Elite {crew|staff member} {will|will certainly|is going to|would certainly|will definitely} {bring|deliver|provide} {an extra|an additional} {level of|amount of|degree of} service on your shoot."
// const str = "Dave Baker is an Elite {crew member|production crew member|video crew member}";
// const str = "Dave Baker is an Elite {crew member|production crew member|video crew member}. This {designation|status|label|classification} by Assignment Desk is {an extra|an additional|a supplementary|yet another|one extra|one additional} {sign|mark|signal|indication|symbol|endorsement} of {quality|high quality|top quality|good quality|excellence|top notch quality|outstanding quality|superior quality|high-quality|value|superiority}."

function change(str) {
    //find string within brackets
    //explode on |
    //use random to pick one of the options
    // console.log(str);

    let extract = str.match(/{(.*?)}/g);

    extract.forEach(element => {
        let subString = element.substr(1, element.length-2);
        let subArray = subString.split('|');
        let select = Math.floor(Math.random() * subArray.length);
        str = str.replace(element, subArray[select]);
    });

return str
}

console.log(change(str))