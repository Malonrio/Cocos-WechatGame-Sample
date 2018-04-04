cc.Class({
    extends: cc.Component,
    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        //显示信息
        cc.director.setDisplayStats(true);

        //设置Hello，World
        this.label.string = "Hello,World!";
    },

    /**
     * 获取系统信息     
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnGetSysInfoClick(event, cusData) {
        let sysInfo = wx.getSystemInfoSync();
        let sysContent = "手机品牌:" + sysInfo.brand;
        sysContent += "\r\n手机型号:" + sysInfo.model;
        sysContent += "\r\n设备像素比:" + sysInfo.pixelRatio;
        sysContent += "\r\n屏幕宽度:" + sysInfo.screenWidth;
        sysContent += "\r\n屏幕高度:" + sysInfo.screenHeight;
        sysContent += "\r\n可使用窗口宽度:" + sysInfo.windowWidth;
        sysContent += "\r\n可使用窗口高度:" + sysInfo.windowHeight;
        sysContent += "\r\n微信设置语言:" + sysInfo.language;
        sysContent += "\r\n微信版本号:" + sysInfo.version;
        sysContent += "\r\n操作系统版本:" + sysInfo.system;
        sysContent += "\r\n客户端平台:" + sysInfo.platform;
        sysContent += "\r\n用户字体大小设置:" + sysInfo.fontSizeSetting;
        sysContent += "\r\n客户端基础库版本:" + sysInfo.SDKVersion;
        sysContent += "\r\n性能等级:" + sysInfo.benchmarkLevel;
        sysContent += "\r\n电量:" + sysInfo.battery;
        sysContent += "\r\nwifi 信号强度:" + sysInfo.wifiSignal;

        wx.showModal(
            {
                title: "系统信息",
                content: sysContent,
                cancelText: "关闭，红",
                cancelColor: "#FF0000",
                confirmText: "确认，绿",
                confirmColor: "#00FF00",
                success: (res) => {
                    console.log("对话框显示成功");
                    console.log("confirm:" + res.confirm);
                    console.log("cancel:" + res.cancel);
                },
                fail: () => {
                    console.log("对话框显示失败");
                },
                complete: () => {
                    console.log("对话框调用完成");
                }

            }
        );
    },

    /**
     * 加速计监听开关
     * @param {toggle组件} toggle 
     */
    toggleAccelerometer(toggle){

        
    },

    /**
     * 长震动400 ms
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnVibrateLongClick(event, cusData) {
        wx.vibrateLong(
            {
                success: function () {
                    console.log("长震动调用成功");
                },
                fail: function () {
                    console.log("长震动调用失败");
                },
                complete: function () {
                    console.log("长震动调用完成");
                },
            }
        );
    },
    /**
     * 短震动15 ms
     * @param {事件对象} event 
     * @param {自定义数据} cusData 
     */
    btnVibrateShortClick(event, cusData) {
        wx.vibrateShort(
            {
                success: function () {
                    console.log("短动调用成功");
                },
                fail: function () {
                    console.log("短动调用失败");
                },
                complete: function () {
                    console.log("短动调用完成");
                },
            }
        );
    },



});
