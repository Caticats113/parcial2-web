export const callFilterData = async (filter:string) => {

    try {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies?filter=bodyType,eq,${filter}`)

        const responseJson = await response.json()
        console.log(responseJson)
        
        const current = responseJson.bodies
        
        return current
    
    } catch (error) {
        console.error(error);
    }
}