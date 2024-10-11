export const callAllData = async (setLoading:any) => {

    try {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false`)

        const responseJson = await response.json()
        console.log(responseJson)
        
        const current = responseJson.bodies
        
        setLoading(false)
        return current
    } catch (error) {
        console.error(error);
    }
}