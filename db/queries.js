module.exports = {
    get_user : 'SELECT * FROM USER WHERE email=?',
    create_user :'INSERT INTO USER(user, email, password) VALUES(?,?,?)',
    get_comments :'SELECT USER.user, COMMENTS.comment FROM COMMENTS INNER JOIN USER ON USER.id = COMMENTS.user',
    create_comment : 'INSERT INTO COMMENTS(user, comment) VALUES(?,?)',
    create_token: 'INSERT INTO TOKENS(user,token) VALUES(?,?)',
    findByToken: 'SELECT USER.user FROM USER INNER JOIN TOKENS ON TOKENS.user = USER.id WHERE USER.id = ?'
}