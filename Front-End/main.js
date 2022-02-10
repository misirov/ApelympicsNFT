const ADDRESS = "0x8A5E2A00716a2F5dd6F0faBF6440144f8f14E110"
const ABI = ["function mint() external"]
async function connectWallet(){
    try{
        window.ethereum.enable()
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Account:", await signer.getAddress());
        const contract = new ethers.Contract(ADDRESS, ABI, signer);
        const tx = await contract.mint();
        var hash = tx.hash;
        console.log(`Your transactipn hash is: ${hash}`)
        if (window.confirm('Click OK to see your transaction on Polygonscan')){
            window.location.href=`https://polygonscan.com/tx/${hash}`;
        };
    
    } catch(e){
        var object =JSON.stringify(e.data)
        var o = object.slice(105,125)
        alert(o)
    }
}