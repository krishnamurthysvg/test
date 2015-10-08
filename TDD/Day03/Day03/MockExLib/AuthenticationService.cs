using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MockExLib
{
    public class AuthenticationService
    {
        public IUserRepository UserRepository { get; set; }
        public IValidator Validator { get; set; }
        public IEncryptor Encryptor { get; set; }

        public bool CreateUser(string userName, string password)
        {
            bool saved = false;
            if (Validator.ValidateLength(userName) &&
                Validator.ValidateLength(password))
            {
                string encryptedPassword = Encryptor.Encrypt(password);
                saved = UserRepository.SaveUser(userName, encryptedPassword);
            }
            else
                throw new ValidatorException("Length of Credentials: invalid");
            
            return saved;
        }

        
    }
}
