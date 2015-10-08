using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MockExTest;
using MockExLib;

namespace MockExIntegrationTests
{
    [TestClass]
    public class AuthenticationServiceIntegrationTest : AuthenticationServiceTest
    {
        [TestInitialize]
        public override void Init()
        {
            AuthService = new AuthenticationService();
            AuthService.UserRepository = null;//Actual Implementation
            AuthService.Validator = null;//Actual Implementation
            AuthService.Encryptor = null;//Actual Implementation
        }
        public override void TestCreateUser()
        {
            //YOUR CODE GOES HERE
        }     
    }
}
