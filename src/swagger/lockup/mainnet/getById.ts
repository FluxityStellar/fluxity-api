/**
 * @swagger
 * /mainnet/lockup/{id}:
 *   get:
 *     summary: Returns lockups by id
 *     tags: [lockup (mainnet)]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: lockup Id
 *         required: true
 *         schema:
 *           type: string
 *           format: string
 *
 *     responses:
 *       200:
 *         description: lockup has been received successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Get lockup by id
 *                 result:
 *                   type: object
 *                   example: {
 *                     _id: 6539a4b453971c96d697f9c0,
 *                     id: "24",
 *                     amount: "119000000",
 *                     cancellable_date: 1699956257,
 *                     cancelled_date: 1699955557,
 *                     cliff_date: 1699956257,
 *                     end_date: 1700042657,
 *                     is_cancelled: false,
 *                     is_vesting: false,
 *                     rate: 86400,
 *                     receiver: "GDK3NJDFD3DG3OO5ZLSSSM56L7ULYKHVUH7UEWV3N5WQBMG4NP72A2O2",
 *                     sender: "GBLBJBTC2URCWUTIXY42W7M5GAZ2NIKTS4QF77BHHWHSBKKSPS2DTOHA",
 *                     start_date: 1699956257,
 *                     token: {
 *                         _id: 6539a4b453971c96d697f9c0,
 *                         address: CBBDKFZZPWJQADUXHS3CCIXYRYVKK2SOPIOUDNA5SWXRC7B7APZN3I3H,
 *                         symbol: fDAI,
 *                         name: FakeDAI,
 *                         decimals: 7,
 *                         claimable: false,
 *                         network: mainnet,
 *                         logo: /public/images/assets/fdai.svg,
 *                         __v: 0
 *                     },
 *                     network: mainnet,
 *                     withdrawn: "0",
 *                     createdAt: "2023-11-14T10:25:26.494Z",
 *                     updatedAt: "2023-11-14T10:25:26.494Z",
 *                     __v: 0,
 *                     status: "ongoing"
 *                   }
 *
 *       404:
 *         description: lockup dose not exist on the database
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: There is no lockup with this id
 *                 result:
 *                   type: object
 *                   example: {}
 *
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: error
 *                   message:
 *                     type: string
 *                     example: Failed to get the lockup
 *                   result:
 *                     type: object
 *                     example: {}
 *
 *
 */
