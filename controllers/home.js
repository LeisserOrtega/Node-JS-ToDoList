

export const landing_page = (req, res) => { 
    res.sendFile(process.cwd() + '/view/index.html') 
}
