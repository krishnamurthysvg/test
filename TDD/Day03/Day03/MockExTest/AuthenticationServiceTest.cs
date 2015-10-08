using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using MockExLib;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace MockExTest
{
    [TestClass]
    public class AuthenticationServiceTest
    {
        public AuthenticationService AuthService { get; set; }
        public Mock<IUserRepository> UserRepo { get; set; }
        public Mock<IValidator> Validator { get; set; }
        public Mock<IEncryptor> Encryptor { get; set; }
        [TestInitialize]
        public virtual void Init()
        {
            AuthService = new AuthenticationService();
            UserRepo = new Mock<IUserRepository>();
            Validator = new Mock<IValidator>();
            Encryptor = new Mock<IEncryptor>();
            AuthService.UserRepository = UserRepo.Object;
            AuthService.Validator = Validator.Object;
            AuthService.Encryptor = Encryptor.Object;
        }
        [TestMethod]
        public void TestSetUp()
        {
            Assert.IsNotNull(AuthService);
            Assert.IsNotNull(AuthService.UserRepository);
        }
        [TestMethod]
        public virtual void TestCreateUser()
        {
            string userName = "root";
            string password = "password";
            Validator.Setup(f => f.ValidateLength(userName)).Returns(true);
            Validator.Setup(f => f.ValidateLength(password)).Returns(true);
            UserRepo.Setup(f => f.SaveUser(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
            bool created = AuthService.CreateUser(userName, password);
            Assert.IsTrue(created);
        }
        [TestMethod]
        public virtual void TestCreateUserWriteToRepository()
        {
            string userName = "root";
            string password = "password";
            Validator.Setup(f => f.ValidateLength(userName)).Returns(true);
            Validator.Setup(f => f.ValidateLength(password)).Returns(true);
            AuthService.CreateUser(userName, password);
            UserRepo.Verify(f => f.SaveUser(It.IsAny<string>(), It.IsAny<string>()), Times.Once);
        }
        [TestMethod]
        public virtual void TestValidateCredentialsData()
        {
            string userName = "root";
            string password = "password";
            Validator.Setup(f => f.ValidateLength(userName)).Returns(true);
            Validator.Setup(f => f.ValidateLength(password)).Returns(true);
            AuthService.CreateUser(userName, password);
            Validator.Verify(f=>f.ValidateLength(It.IsAny<string>()),Times.Exactly(2));
        }
        [TestMethod]
        [ExpectedException(typeof(ValidatorException))]
        public virtual void TestValidateCredentialsLengthFails()
        {
            string userName = "root";
            string password = "password";
            Validator.Setup(f => f.ValidateLength(userName)).Returns(false);
            Validator.Setup(f => f.ValidateLength(password)).Returns(true);
            AuthService.CreateUser(userName, password);
        }
        [TestMethod]
        public virtual void TestEncryptPassword()
        {
            string userName = "root";
            string password = "password";
            Validator.Setup(f => f.ValidateLength(userName)).Returns(true);
            Validator.Setup(f => f.ValidateLength(password)).Returns(true);
            AuthService.CreateUser(userName, password);
            Encryptor.Verify(f => f.Encrypt(password), Times.Once);
        }
    }
}
