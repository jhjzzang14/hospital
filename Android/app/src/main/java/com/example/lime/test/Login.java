package com.example.lime.test;

import android.app.TabActivity;
import android.content.Intent;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TabHost;
import android.widget.Toast;


/**
 * Created by lime on 2016-04-16.
 */
public class Login extends TabActivity {
    /** Called when the activity is first created. */
    public TabHost tabHost = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.log_in);

        Intent intent = getIntent();
        String name = intent.getStringExtra("name");
        int no = intent.getIntExtra("no",1);
        String birthday = intent.getStringExtra("birthday");
        String address = intent.getStringExtra("address");
        String phone = intent.getStringExtra("phone");

        //게시판에 유저 정보 전달
        Intent intent4 = new Intent(this, Tab_community.class);
        intent4.putExtra("name",name);
        intent4.putExtra("no",no);
        intent4.putExtra("birthday",birthday);
        intent4.putExtra("address",address);
        intent4.putExtra("phone",phone);

        //예약에 유저 정보 전달
        Intent intent2 = new Intent(this, Tab_treatcheck.class);
        intent2.putExtra("name",name);
        intent2.putExtra("no",no);
        intent2.putExtra("birthday",birthday);
        intent2.putExtra("address",address);
        intent2.putExtra("phone",phone);

        Intent intent3 = new Intent(this, Tab_prescription.class);
        intent3.putExtra("name",name);
        intent3.putExtra("no",no);
        intent3.putExtra("birthday",birthday);
        intent3.putExtra("address",address);
        intent3.putExtra("phone",phone);


        tabHost = (TabHost) findViewById(android.R.id.tabhost);

        tabHost.addTab(tabHost.newTabSpec("tab1")
                .setIndicator("정보")
                .setContent(new Intent(this, Tab_information.class)));

        tabHost.addTab(tabHost.newTabSpec("tab2")
                .setIndicator("예약")
                .setContent(intent2));

        tabHost.addTab(tabHost.newTabSpec("tab3")
                .setIndicator("확인")
                .setContent(intent3));

        tabHost.addTab(tabHost.newTabSpec("tab4")
                .setIndicator("게시판")
                .setContent(intent4));

        tabHost.addTab(tabHost.newTabSpec("tab5")
                .setIndicator("캠페인")
                .setContent(new Intent(this, Tab_campaign.class)));

        tabHost.setCurrentTab(0);



    }

}
