using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NumberEngineLib;

namespace TestNumberEngineLib
{
    [TestClass]
    public class MathEngineTest
    {
        private MathEngine mathEngine;

        [TestInitialize]
        public void Init() {
            mathEngine = new MathEngine();
        }

        [TestMethod]
        public void TestSetUp()
        {
            Assert.IsNotNull(mathEngine);
        }

        [TestMethod]
        public void TestIfNumberIsDivisbleBy3()
        {
            int number = 3;
            string output = mathEngine.Compute(number).ToString();
            Assert.AreEqual("Hot", output);
        }
        [TestMethod]
        public void TestIfNumberIsDivisbleBy5()
        {
            int number = 5;
            string output = mathEngine.Compute(number).ToString();
            Assert.AreEqual("Hotter", output);
        }
        [TestMethod]
        public void TestIfNumberIsDivisbleBy3And5()
        {
            int number = 15;
            string output = mathEngine.Compute(number).ToString();
            Assert.AreEqual("HotHotter", output);
        }
        [TestMethod]
        public void TestIfNumberIsDivisbleBy3And5ForAnotherNumber()
        {
            int number = 60;
            string output = mathEngine.Compute(number).ToString();
            Assert.AreEqual("HotHotter", output);
        }
        [TestMethod]
        public void TestIfNumberIsNotDivisbleBy3And5()
        {
            int number = 61;
            object output = (int)mathEngine.Compute(number);
            Assert.AreEqual(number, output);
        }
        [TestMethod]
        public void TestIfNumberHas3InIt()
        {
            int number = 13;
            string output = mathEngine.Compute(number).ToString();
            Assert.AreEqual("Hot", output);
        }

        [TestMethod]
        public void TestIfNumberHas5InIt()
        {
            int number = 52;
            string output = mathEngine.Compute(number).ToString();
            Assert.AreEqual("Hotter", output);
        }
        [TestMethod]
        public void TestIfNumberHas5And3InIt()
        {
            int number = 53;
            string output = mathEngine.Compute(number).ToString();
            Assert.AreEqual("HotHotter", output);
        }
    }
}
