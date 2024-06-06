const dummyAPIResponse ={
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showRandomColorGenerator: true,
    showAccordian: false
}

function featureFlagsDataServiceCall(){
    return new Promise((resolve, reject)=>{
        if(dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);

        else reject('Some error occured')
    })
}

export default featureFlagsDataServiceCall;