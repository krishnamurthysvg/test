using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GuessingGameLib;

namespace GuessingGameTest
{
    [TestClass]
    public class GameTest
    {
        public Game game { get; set; }
        [TestInitialize]
        public void SetUp() {
            int limit = 100;
            game = new Game(limit);
        }
        [TestMethod]
        public void TestSetUp()
        {
            Assert.IsNotNull(game);
        }
        [TestMethod]
        public void TestRandomNumberIsGeneratedInTheBeginning()
        {
            Assert.IsTrue(game.Target >= 1 && game.Target < 100);
        }
        [TestMethod]
        public void TestGameOverInTheBeginning()
        {
            Assert.IsTrue(!game.GameOver);
        }
        [TestMethod]
        public void TestAttemptsToBe0InTheBeginning()
        {
            Assert.IsTrue(game.Attempts == 0);
        }
        [TestMethod]
        public void TestMessageToBeNullInTheBeginning()
        {
            Assert.IsNull(game.Message);
        }
        [TestMethod]
        public void TestAimHigher()
        {
            game.Target = 75;
            int guess = 50;
            game.Play(guess);
            Assert.AreEqual("Aim Higher", game.Message);
        }
        [TestMethod]
        public void TestAimLower()
        {
            game.Target = 75;
            int guess = 80;
            game.Play(guess);
            Assert.AreEqual("Aim Lower", game.Message);
        }
        [TestMethod]
        public void TestYouHaveGotIt()
        {
            game.Target = 75;
            int guess = 75;
            game.Play(guess);
            Assert.AreEqual("You've got it!!!", game.Message);
        }
        [TestMethod]
        public void TestAttempts()
        {
            game.Target = 77;
            game.Play(50);
            game.Play(75);
            game.Play(80);
            game.Play(77);
            Assert.AreEqual(4, game.Attempts);
        }
        [TestMethod]
        [ExpectedException(typeof(GameException))]
        public void TestInvalidInput(){
            game.Play(-1);
        }
        [TestMethod]
        [ExpectedException(typeof(GameException))]
        public void TestPlayGameAfterItIsOver()
        {
            game.Target = 77;
            game.Play(50);
            game.Play(75);
            game.Play(80);
            game.Play(77);
            game.Play(76);
        }
        [TestMethod]
        public void TestPromptToPlayANewGame()
        {
            game.Target = 77;
            game.Play(50);
            game.Play(75);
            game.Play(80);
            game.Play(77);
            game.Reset();
            Assert.IsTrue(!game.GameOver);
        }
        [TestMethod]
        public void TestRecheckAttemptsForANewGame()
        {
            game.Target = 77;
            game.Play(50);
            game.Play(75);
            game.Play(80);
            game.Play(77);
            game.Reset();
            Assert.IsTrue(game.Attempts == 0);
        }
        [TestMethod]
        public void TestRecheckMessageForANewGame()
        {
            game.Target = 77;
            game.Play(50);
            game.Play(75);
            game.Play(80);
            game.Play(77);
            game.Reset();
            Assert.AreEqual(null,game.Message);
        }
        [TestMethod]
        public void TestRecheckTargetForANewGame()
        {
            game.Target = 101;
            game.Play(101);
            game.Reset();
            Assert.IsTrue(game.Target >= 1 && game.Target < 100);
         }
        [TestMethod]
        [ExpectedException(typeof(GameException))]
        public void TestPlayANewGameWhenTheExistingGameIsInProgress()
        {
            game.Target = 77;
            game.Play(76);
            game.Reset();
        }
    }
}
