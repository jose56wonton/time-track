/********************************************************************************
** Form generated from reading UI file 'loginform.ui'
**
** Created by: Qt User Interface Compiler version 5.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_LOGINFORM_H
#define UI_LOGINFORM_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_LoginForm
{
public:
    QGridLayout *gridLayout;
    QLineEdit *passEdit;
    QLabel *label;
    QHBoxLayout *horizontalLayout_2;
    QLabel *passLabel;

    void setupUi(QWidget *LoginForm)
    {
        if (LoginForm->objectName().isEmpty())
            LoginForm->setObjectName(QStringLiteral("LoginForm"));
        LoginForm->resize(148, 67);
        QFont font;
        font.setFamily(QStringLiteral("Calibri"));
        LoginForm->setFont(font);
        LoginForm->setStyleSheet(QLatin1String("*{\n"
"font-family:\"Calibri\";\n"
"font-size: 14px;\n"
"\n"
"}\n"
"QTabWidget{\n"
"margin:0px;\n"
"padding:0px;\n"
"border-top: 15px solid #D3D3D3;\n"
"\n"
"}\n"
"QStackedWidget{\n"
"margin:0px;\n"
"padding:0px;\n"
"}\n"
"QWidget{\n"
"margin:0px;\n"
"padding:0px;\n"
"}\n"
"\n"
"QPushButton{\n"
"padding:3px;\n"
"}\n"
"QRadioButton{\n"
"padding:0px;\n"
"margin:0px;\n"
"}\n"
"\n"
"QTabWidget{\n"
"\n"
"}\n"
"QGroupBox { \n"
"   \n"
" } "));
        gridLayout = new QGridLayout(LoginForm);
        gridLayout->setObjectName(QStringLiteral("gridLayout"));
        passEdit = new QLineEdit(LoginForm);
        passEdit->setObjectName(QStringLiteral("passEdit"));
        passEdit->setMinimumSize(QSize(100, 0));
        passEdit->setMaximumSize(QSize(100, 16777215));
        passEdit->setFont(font);
        passEdit->setMaxLength(4);
        passEdit->setEchoMode(QLineEdit::Password);

        gridLayout->addWidget(passEdit, 0, 2, 1, 1);

        label = new QLabel(LoginForm);
        label->setObjectName(QStringLiteral("label"));

        gridLayout->addWidget(label, 0, 0, 1, 1);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setObjectName(QStringLiteral("horizontalLayout_2"));
        passLabel = new QLabel(LoginForm);
        passLabel->setObjectName(QStringLiteral("passLabel"));

        horizontalLayout_2->addWidget(passLabel);


        gridLayout->addLayout(horizontalLayout_2, 0, 3, 1, 1);


        retranslateUi(LoginForm);

        QMetaObject::connectSlotsByName(LoginForm);
    } // setupUi

    void retranslateUi(QWidget *LoginForm)
    {
        LoginForm->setWindowTitle(QApplication::translate("LoginForm", "Time-Track", 0));
        label->setText(QString());
        passLabel->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class LoginForm: public Ui_LoginForm {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_LOGINFORM_H
